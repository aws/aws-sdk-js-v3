import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { DeleteDataSourceInput, DeleteDataSourceOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteDataSourceCommandInput = DeleteDataSourceInput;
export declare type DeleteDataSourceCommandOutput = DeleteDataSourceOutput & __MetadataBearer;
export declare class DeleteDataSourceCommand extends $Command<DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput, MachineLearningClientResolvedConfig> {
    readonly input: DeleteDataSourceCommandInput;
    constructor(input: DeleteDataSourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MachineLearningClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput>;
    private serialize;
    private deserialize;
}
