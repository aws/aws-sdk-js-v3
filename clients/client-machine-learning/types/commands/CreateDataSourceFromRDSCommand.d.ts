import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { CreateDataSourceFromRDSInput, CreateDataSourceFromRDSOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDataSourceFromRDSCommandInput = CreateDataSourceFromRDSInput;
export declare type CreateDataSourceFromRDSCommandOutput = CreateDataSourceFromRDSOutput & __MetadataBearer;
export declare class CreateDataSourceFromRDSCommand extends $Command<CreateDataSourceFromRDSCommandInput, CreateDataSourceFromRDSCommandOutput, MachineLearningClientResolvedConfig> {
    readonly input: CreateDataSourceFromRDSCommandInput;
    constructor(input: CreateDataSourceFromRDSCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MachineLearningClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDataSourceFromRDSCommandInput, CreateDataSourceFromRDSCommandOutput>;
    private serialize;
    private deserialize;
}
