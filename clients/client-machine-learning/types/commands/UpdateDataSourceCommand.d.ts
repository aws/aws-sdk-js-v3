import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { UpdateDataSourceInput, UpdateDataSourceOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateDataSourceCommandInput = UpdateDataSourceInput;
export declare type UpdateDataSourceCommandOutput = UpdateDataSourceOutput & __MetadataBearer;
export declare class UpdateDataSourceCommand extends $Command<UpdateDataSourceCommandInput, UpdateDataSourceCommandOutput, MachineLearningClientResolvedConfig> {
    readonly input: UpdateDataSourceCommandInput;
    constructor(input: UpdateDataSourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MachineLearningClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDataSourceCommandInput, UpdateDataSourceCommandOutput>;
    private serialize;
    private deserialize;
}
