import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { CreateDataSourceFromRedshiftInput, CreateDataSourceFromRedshiftOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDataSourceFromRedshiftCommandInput = CreateDataSourceFromRedshiftInput;
export declare type CreateDataSourceFromRedshiftCommandOutput = CreateDataSourceFromRedshiftOutput & __MetadataBearer;
export declare class CreateDataSourceFromRedshiftCommand extends $Command<CreateDataSourceFromRedshiftCommandInput, CreateDataSourceFromRedshiftCommandOutput, MachineLearningClientResolvedConfig> {
    readonly input: CreateDataSourceFromRedshiftCommandInput;
    constructor(input: CreateDataSourceFromRedshiftCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MachineLearningClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDataSourceFromRedshiftCommandInput, CreateDataSourceFromRedshiftCommandOutput>;
    private serialize;
    private deserialize;
}
