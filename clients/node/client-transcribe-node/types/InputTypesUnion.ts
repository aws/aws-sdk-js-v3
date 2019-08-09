import { CreateVocabularyInput } from "./CreateVocabularyInput";
import { DeleteTranscriptionJobInput } from "./DeleteTranscriptionJobInput";
import { DeleteVocabularyInput } from "./DeleteVocabularyInput";
import { GetTranscriptionJobInput } from "./GetTranscriptionJobInput";
import { GetVocabularyInput } from "./GetVocabularyInput";
import { ListTranscriptionJobsInput } from "./ListTranscriptionJobsInput";
import { ListVocabulariesInput } from "./ListVocabulariesInput";
import { StartTranscriptionJobInput } from "./StartTranscriptionJobInput";
import { UpdateVocabularyInput } from "./UpdateVocabularyInput";
export type InputTypesUnion =
  | CreateVocabularyInput
  | DeleteTranscriptionJobInput
  | DeleteVocabularyInput
  | GetTranscriptionJobInput
  | GetVocabularyInput
  | ListTranscriptionJobsInput
  | ListVocabulariesInput
  | StartTranscriptionJobInput
  | UpdateVocabularyInput;
