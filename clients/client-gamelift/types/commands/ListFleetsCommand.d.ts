import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { ListFleetsInput, ListFleetsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListFleetsCommandInput = ListFleetsInput;
export declare type ListFleetsCommandOutput = ListFleetsOutput & __MetadataBearer;
export declare class ListFleetsCommand extends $Command<ListFleetsCommandInput, ListFleetsCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: ListFleetsCommandInput;
    constructor(input: ListFleetsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListFleetsCommandInput, ListFleetsCommandOutput>;
    private serialize;
    private deserialize;
}
