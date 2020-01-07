import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { CreateDatasetRequest, CreateDatasetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDatasetCommandInput = CreateDatasetRequest;
export declare type CreateDatasetCommandOutput = CreateDatasetResponse & __MetadataBearer;
export declare class CreateDatasetCommand extends $Command<CreateDatasetCommandInput, CreateDatasetCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: CreateDatasetCommandInput;
    constructor(input: CreateDatasetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDatasetCommandInput, CreateDatasetCommandOutput>;
    private serialize;
    private deserialize;
}
