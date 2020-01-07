import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { DefineIndexFieldRequest, DefineIndexFieldResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DefineIndexFieldCommandInput = DefineIndexFieldRequest;
export declare type DefineIndexFieldCommandOutput = DefineIndexFieldResponse & __MetadataBearer;
export declare class DefineIndexFieldCommand extends $Command<DefineIndexFieldCommandInput, DefineIndexFieldCommandOutput, CloudSearchClientResolvedConfig> {
    readonly input: DefineIndexFieldCommandInput;
    constructor(input: DefineIndexFieldCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudSearchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DefineIndexFieldCommandInput, DefineIndexFieldCommandOutput>;
    private serialize;
    private deserialize;
}
