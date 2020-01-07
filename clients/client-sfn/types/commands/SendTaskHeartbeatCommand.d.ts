import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient";
import { SendTaskHeartbeatInput, SendTaskHeartbeatOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SendTaskHeartbeatCommandInput = SendTaskHeartbeatInput;
export declare type SendTaskHeartbeatCommandOutput = SendTaskHeartbeatOutput & __MetadataBearer;
export declare class SendTaskHeartbeatCommand extends $Command<SendTaskHeartbeatCommandInput, SendTaskHeartbeatCommandOutput, SFNClientResolvedConfig> {
    readonly input: SendTaskHeartbeatCommandInput;
    constructor(input: SendTaskHeartbeatCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SFNClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SendTaskHeartbeatCommandInput, SendTaskHeartbeatCommandOutput>;
    private serialize;
    private deserialize;
}
