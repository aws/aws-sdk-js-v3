import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { CreateBatchInferenceJobRequest, CreateBatchInferenceJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateBatchInferenceJobCommandInput = CreateBatchInferenceJobRequest;
export declare type CreateBatchInferenceJobCommandOutput = CreateBatchInferenceJobResponse & __MetadataBearer;
export declare class CreateBatchInferenceJobCommand extends $Command<CreateBatchInferenceJobCommandInput, CreateBatchInferenceJobCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: CreateBatchInferenceJobCommandInput;
    constructor(input: CreateBatchInferenceJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateBatchInferenceJobCommandInput, CreateBatchInferenceJobCommandOutput>;
    private serialize;
    private deserialize;
}
