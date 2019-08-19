import { AddTagsToCertificateInput } from "./AddTagsToCertificateInput";
import { DeleteCertificateInput } from "./DeleteCertificateInput";
import { DescribeCertificateInput } from "./DescribeCertificateInput";
import { ExportCertificateInput } from "./ExportCertificateInput";
import { GetCertificateInput } from "./GetCertificateInput";
import { ImportCertificateInput } from "./ImportCertificateInput";
import { ListCertificatesInput } from "./ListCertificatesInput";
import { ListTagsForCertificateInput } from "./ListTagsForCertificateInput";
import { RemoveTagsFromCertificateInput } from "./RemoveTagsFromCertificateInput";
import { RenewCertificateInput } from "./RenewCertificateInput";
import { RequestCertificateInput } from "./RequestCertificateInput";
import { ResendValidationEmailInput } from "./ResendValidationEmailInput";
import { UpdateCertificateOptionsInput } from "./UpdateCertificateOptionsInput";
export type InputTypesUnion =
  | AddTagsToCertificateInput
  | DeleteCertificateInput
  | DescribeCertificateInput
  | ExportCertificateInput
  | GetCertificateInput
  | ImportCertificateInput
  | ListCertificatesInput
  | ListTagsForCertificateInput
  | RemoveTagsFromCertificateInput
  | RenewCertificateInput
  | RequestCertificateInput
  | ResendValidationEmailInput
  | UpdateCertificateOptionsInput;
