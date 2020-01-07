import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { DefineExpressionRequest, DefineExpressionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DefineExpressionCommandInput = DefineExpressionRequest;
export declare type DefineExpressionCommandOutput = DefineExpressionResponse & __MetadataBearer;
export declare class DefineExpressionCommand extends $Command<DefineExpressionCommandInput, DefineExpressionCommandOutput, CloudSearchClientResolvedConfig> {
    readonly input: DefineExpressionCommandInput;
    constructor(input: DefineExpressionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudSearchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DefineExpressionCommandInput, DefineExpressionCommandOutput>;
    private serialize;
    private deserialize;
}
