import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { PeerVpcRequest, PeerVpcResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PeerVpcCommandInput = PeerVpcRequest;
export declare type PeerVpcCommandOutput = PeerVpcResult & __MetadataBearer;
export declare class PeerVpcCommand extends $Command<PeerVpcCommandInput, PeerVpcCommandOutput, LightsailClientResolvedConfig> {
    readonly input: PeerVpcCommandInput;
    constructor(input: PeerVpcCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PeerVpcCommandInput, PeerVpcCommandOutput>;
    private serialize;
    private deserialize;
}
