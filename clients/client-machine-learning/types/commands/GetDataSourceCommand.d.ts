import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { GetDataSourceInput, GetDataSourceOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetDataSourceCommandInput = GetDataSourceInput;
export declare type GetDataSourceCommandOutput = GetDataSourceOutput & __MetadataBearer;
export declare class GetDataSourceCommand extends $Command<GetDataSourceCommandInput, GetDataSourceCommandOutput, MachineLearningClientResolvedConfig> {
    readonly input: GetDataSourceCommandInput;
    constructor(input: GetDataSourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MachineLearningClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDataSourceCommandInput, GetDataSourceCommandOutput>;
    private serialize;
    private deserialize;
}
