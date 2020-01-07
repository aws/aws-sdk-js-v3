import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DeleteScriptInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteScriptCommandInput = DeleteScriptInput;
export declare type DeleteScriptCommandOutput = __MetadataBearer;
export declare class DeleteScriptCommand extends $Command<DeleteScriptCommandInput, DeleteScriptCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: DeleteScriptCommandInput;
    constructor(input: DeleteScriptCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteScriptCommandInput, DeleteScriptCommandOutput>;
    private serialize;
    private deserialize;
}
