import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { MoveAddressToVpcRequest, MoveAddressToVpcResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type MoveAddressToVpcCommandInput = MoveAddressToVpcRequest;
export declare type MoveAddressToVpcCommandOutput = MoveAddressToVpcResult & __MetadataBearer;
export declare class MoveAddressToVpcCommand extends $Command<MoveAddressToVpcCommandInput, MoveAddressToVpcCommandOutput, EC2ClientResolvedConfig> {
    readonly input: MoveAddressToVpcCommandInput;
    constructor(input: MoveAddressToVpcCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<MoveAddressToVpcCommandInput, MoveAddressToVpcCommandOutput>;
    private serialize;
    private deserialize;
}
