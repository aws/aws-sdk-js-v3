import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { DeleteExpressionRequest, DeleteExpressionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteExpressionCommandInput = DeleteExpressionRequest;
export declare type DeleteExpressionCommandOutput = DeleteExpressionResponse & __MetadataBearer;
export declare class DeleteExpressionCommand extends $Command<DeleteExpressionCommandInput, DeleteExpressionCommandOutput, CloudSearchClientResolvedConfig> {
    readonly input: DeleteExpressionCommandInput;
    constructor(input: DeleteExpressionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudSearchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteExpressionCommandInput, DeleteExpressionCommandOutput>;
    private serialize;
    private deserialize;
}
