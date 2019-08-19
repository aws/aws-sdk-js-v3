import { CreateCertificateAuthorityInput } from "./CreateCertificateAuthorityInput";
import { CreateCertificateAuthorityAuditReportInput } from "./CreateCertificateAuthorityAuditReportInput";
import { CreatePermissionInput } from "./CreatePermissionInput";
import { DeleteCertificateAuthorityInput } from "./DeleteCertificateAuthorityInput";
import { DeletePermissionInput } from "./DeletePermissionInput";
import { DescribeCertificateAuthorityInput } from "./DescribeCertificateAuthorityInput";
import { DescribeCertificateAuthorityAuditReportInput } from "./DescribeCertificateAuthorityAuditReportInput";
import { GetCertificateInput } from "./GetCertificateInput";
import { GetCertificateAuthorityCertificateInput } from "./GetCertificateAuthorityCertificateInput";
import { GetCertificateAuthorityCsrInput } from "./GetCertificateAuthorityCsrInput";
import { ImportCertificateAuthorityCertificateInput } from "./ImportCertificateAuthorityCertificateInput";
import { IssueCertificateInput } from "./IssueCertificateInput";
import { ListCertificateAuthoritiesInput } from "./ListCertificateAuthoritiesInput";
import { ListPermissionsInput } from "./ListPermissionsInput";
import { ListTagsInput } from "./ListTagsInput";
import { RestoreCertificateAuthorityInput } from "./RestoreCertificateAuthorityInput";
import { RevokeCertificateInput } from "./RevokeCertificateInput";
import { TagCertificateAuthorityInput } from "./TagCertificateAuthorityInput";
import { UntagCertificateAuthorityInput } from "./UntagCertificateAuthorityInput";
import { UpdateCertificateAuthorityInput } from "./UpdateCertificateAuthorityInput";
export type InputTypesUnion =
  | CreateCertificateAuthorityInput
  | CreateCertificateAuthorityAuditReportInput
  | CreatePermissionInput
  | DeleteCertificateAuthorityInput
  | DeletePermissionInput
  | DescribeCertificateAuthorityInput
  | DescribeCertificateAuthorityAuditReportInput
  | GetCertificateInput
  | GetCertificateAuthorityCertificateInput
  | GetCertificateAuthorityCsrInput
  | ImportCertificateAuthorityCertificateInput
  | IssueCertificateInput
  | ListCertificateAuthoritiesInput
  | ListPermissionsInput
  | ListTagsInput
  | RestoreCertificateAuthorityInput
  | RevokeCertificateInput
  | TagCertificateAuthorityInput
  | UntagCertificateAuthorityInput
  | UpdateCertificateAuthorityInput;
