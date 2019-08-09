import { ACMClient } from "../../ACMClient";
import { ListCertificatesCommand } from "../../commands/ListCertificatesCommand";
import { GetCertificateCommand } from "../../commands/GetCertificateCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-acm Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("ListCertificates should succeed when given correct input", done => {
    const client = new ACMClient({
      region: defaultRegion,
      credentials
    });

    const listCertificates = new ListCertificatesCommand({});

    client
      .send(listCertificates)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("GetCertificate should fail when given bad input", done => {
    const client = new ACMClient({
      region: defaultRegion,
      credentials
    });

    const getCertificate = new GetCertificateCommand({
      CertificateArn:
        "arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012"
    });

    client
      .send(getCertificate)
      .then(result => {
        expect(result).toBeUndefined();
        done();
      })
      .catch(err => {
        expect(err).toBeDefined();
        done();
      });
  });
});
