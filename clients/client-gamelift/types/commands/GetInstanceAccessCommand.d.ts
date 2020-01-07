import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { GetInstanceAccessInput, GetInstanceAccessOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetInstanceAccessCommandInput = GetInstanceAccessInput;
export declare type GetInstanceAccessCommandOutput = GetInstanceAccessOutput & __MetadataBearer;
export declare class GetInstanceAccessCommand extends $Command<GetInstanceAccessCommandInput, GetInstanceAccessCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: GetInstanceAccessCommandInput;
    constructor(input: GetInstanceAccessCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetInstanceAccessCommandInput, GetInstanceAccessCommandOutput>;
    private serialize;
    private deserialize;
}
