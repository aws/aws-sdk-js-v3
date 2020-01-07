import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { ListAliasesInput, ListAliasesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListAliasesCommandInput = ListAliasesInput;
export declare type ListAliasesCommandOutput = ListAliasesOutput & __MetadataBearer;
export declare class ListAliasesCommand extends $Command<ListAliasesCommandInput, ListAliasesCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: ListAliasesCommandInput;
    constructor(input: ListAliasesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAliasesCommandInput, ListAliasesCommandOutput>;
    private serialize;
    private deserialize;
}
