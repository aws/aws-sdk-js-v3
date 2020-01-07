import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { CreateDataSourceFromS3Input, CreateDataSourceFromS3Output } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDataSourceFromS3CommandInput = CreateDataSourceFromS3Input;
export declare type CreateDataSourceFromS3CommandOutput = CreateDataSourceFromS3Output & __MetadataBearer;
export declare class CreateDataSourceFromS3Command extends $Command<CreateDataSourceFromS3CommandInput, CreateDataSourceFromS3CommandOutput, MachineLearningClientResolvedConfig> {
    readonly input: CreateDataSourceFromS3CommandInput;
    constructor(input: CreateDataSourceFromS3CommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MachineLearningClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDataSourceFromS3CommandInput, CreateDataSourceFromS3CommandOutput>;
    private serialize;
    private deserialize;
}
