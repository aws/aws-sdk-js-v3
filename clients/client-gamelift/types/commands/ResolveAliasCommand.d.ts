import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { ResolveAliasInput, ResolveAliasOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ResolveAliasCommandInput = ResolveAliasInput;
export declare type ResolveAliasCommandOutput = ResolveAliasOutput & __MetadataBearer;
export declare class ResolveAliasCommand extends $Command<ResolveAliasCommandInput, ResolveAliasCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: ResolveAliasCommandInput;
    constructor(input: ResolveAliasCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResolveAliasCommandInput, ResolveAliasCommandOutput>;
    private serialize;
    private deserialize;
}
