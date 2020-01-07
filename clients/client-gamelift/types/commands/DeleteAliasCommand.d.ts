import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DeleteAliasInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteAliasCommandInput = DeleteAliasInput;
export declare type DeleteAliasCommandOutput = __MetadataBearer;
export declare class DeleteAliasCommand extends $Command<DeleteAliasCommandInput, DeleteAliasCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: DeleteAliasCommandInput;
    constructor(input: DeleteAliasCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAliasCommandInput, DeleteAliasCommandOutput>;
    private serialize;
    private deserialize;
}
