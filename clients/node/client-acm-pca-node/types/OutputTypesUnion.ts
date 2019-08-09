import { CreateCertificateAuthorityOutput } from "./CreateCertificateAuthorityOutput";
import { CreateCertificateAuthorityAuditReportOutput } from "./CreateCertificateAuthorityAuditReportOutput";
import { CreatePermissionOutput } from "./CreatePermissionOutput";
import { DeleteCertificateAuthorityOutput } from "./DeleteCertificateAuthorityOutput";
import { DeletePermissionOutput } from "./DeletePermissionOutput";
import { DescribeCertificateAuthorityOutput } from "./DescribeCertificateAuthorityOutput";
import { DescribeCertificateAuthorityAuditReportOutput } from "./DescribeCertificateAuthorityAuditReportOutput";
import { GetCertificateOutput } from "./GetCertificateOutput";
import { GetCertificateAuthorityCertificateOutput } from "./GetCertificateAuthorityCertificateOutput";
import { GetCertificateAuthorityCsrOutput } from "./GetCertificateAuthorityCsrOutput";
import { ImportCertificateAuthorityCertificateOutput } from "./ImportCertificateAuthorityCertificateOutput";
import { IssueCertificateOutput } from "./IssueCertificateOutput";
import { ListCertificateAuthoritiesOutput } from "./ListCertificateAuthoritiesOutput";
import { ListPermissionsOutput } from "./ListPermissionsOutput";
import { ListTagsOutput } from "./ListTagsOutput";
import { RestoreCertificateAuthorityOutput } from "./RestoreCertificateAuthorityOutput";
import { RevokeCertificateOutput } from "./RevokeCertificateOutput";
import { TagCertificateAuthorityOutput } from "./TagCertificateAuthorityOutput";
import { UntagCertificateAuthorityOutput } from "./UntagCertificateAuthorityOutput";
import { UpdateCertificateAuthorityOutput } from "./UpdateCertificateAuthorityOutput";
export type OutputTypesUnion =
  | CreateCertificateAuthorityOutput
  | CreateCertificateAuthorityAuditReportOutput
  | CreatePermissionOutput
  | DeleteCertificateAuthorityOutput
  | DeletePermissionOutput
  | DescribeCertificateAuthorityOutput
  | DescribeCertificateAuthorityAuditReportOutput
  | GetCertificateOutput
  | GetCertificateAuthorityCertificateOutput
  | GetCertificateAuthorityCsrOutput
  | ImportCertificateAuthorityCertificateOutput
  | IssueCertificateOutput
  | ListCertificateAuthoritiesOutput
  | ListPermissionsOutput
  | ListTagsOutput
  | RestoreCertificateAuthorityOutput
  | RevokeCertificateOutput
  | TagCertificateAuthorityOutput
  | UntagCertificateAuthorityOutput
  | UpdateCertificateAuthorityOutput;
