import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { CreateDatasetImportJobRequest, CreateDatasetImportJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDatasetImportJobCommandInput = CreateDatasetImportJobRequest;
export declare type CreateDatasetImportJobCommandOutput = CreateDatasetImportJobResponse & __MetadataBearer;
export declare class CreateDatasetImportJobCommand extends $Command<CreateDatasetImportJobCommandInput, CreateDatasetImportJobCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: CreateDatasetImportJobCommandInput;
    constructor(input: CreateDatasetImportJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDatasetImportJobCommandInput, CreateDatasetImportJobCommandOutput>;
    private serialize;
    private deserialize;
}
