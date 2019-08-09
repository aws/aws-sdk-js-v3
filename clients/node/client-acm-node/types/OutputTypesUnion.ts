import { AddTagsToCertificateOutput } from "./AddTagsToCertificateOutput";
import { DeleteCertificateOutput } from "./DeleteCertificateOutput";
import { DescribeCertificateOutput } from "./DescribeCertificateOutput";
import { ExportCertificateOutput } from "./ExportCertificateOutput";
import { GetCertificateOutput } from "./GetCertificateOutput";
import { ImportCertificateOutput } from "./ImportCertificateOutput";
import { ListCertificatesOutput } from "./ListCertificatesOutput";
import { ListTagsForCertificateOutput } from "./ListTagsForCertificateOutput";
import { RemoveTagsFromCertificateOutput } from "./RemoveTagsFromCertificateOutput";
import { RenewCertificateOutput } from "./RenewCertificateOutput";
import { RequestCertificateOutput } from "./RequestCertificateOutput";
import { ResendValidationEmailOutput } from "./ResendValidationEmailOutput";
import { UpdateCertificateOptionsOutput } from "./UpdateCertificateOptionsOutput";
export type OutputTypesUnion =
  | AddTagsToCertificateOutput
  | DeleteCertificateOutput
  | DescribeCertificateOutput
  | ExportCertificateOutput
  | GetCertificateOutput
  | ImportCertificateOutput
  | ListCertificatesOutput
  | ListTagsForCertificateOutput
  | RemoveTagsFromCertificateOutput
  | RenewCertificateOutput
  | RequestCertificateOutput
  | ResendValidationEmailOutput
  | UpdateCertificateOptionsOutput;
