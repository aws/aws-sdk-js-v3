import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { UnpeerVpcRequest, UnpeerVpcResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UnpeerVpcCommandInput = UnpeerVpcRequest;
export declare type UnpeerVpcCommandOutput = UnpeerVpcResult & __MetadataBearer;
export declare class UnpeerVpcCommand extends $Command<UnpeerVpcCommandInput, UnpeerVpcCommandOutput, LightsailClientResolvedConfig> {
    readonly input: UnpeerVpcCommandInput;
    constructor(input: UnpeerVpcCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UnpeerVpcCommandInput, UnpeerVpcCommandOutput>;
    private serialize;
    private deserialize;
}
