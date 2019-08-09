import { CreateVocabularyOutput } from "./CreateVocabularyOutput";
import { DeleteTranscriptionJobOutput } from "./DeleteTranscriptionJobOutput";
import { DeleteVocabularyOutput } from "./DeleteVocabularyOutput";
import { GetTranscriptionJobOutput } from "./GetTranscriptionJobOutput";
import { GetVocabularyOutput } from "./GetVocabularyOutput";
import { ListTranscriptionJobsOutput } from "./ListTranscriptionJobsOutput";
import { ListVocabulariesOutput } from "./ListVocabulariesOutput";
import { StartTranscriptionJobOutput } from "./StartTranscriptionJobOutput";
import { UpdateVocabularyOutput } from "./UpdateVocabularyOutput";
export type OutputTypesUnion =
  | CreateVocabularyOutput
  | DeleteTranscriptionJobOutput
  | DeleteVocabularyOutput
  | GetTranscriptionJobOutput
  | GetVocabularyOutput
  | ListTranscriptionJobsOutput
  | ListVocabulariesOutput
  | StartTranscriptionJobOutput
  | UpdateVocabularyOutput;
