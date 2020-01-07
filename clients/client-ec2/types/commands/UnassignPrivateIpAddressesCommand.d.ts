import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { UnassignPrivateIpAddressesRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UnassignPrivateIpAddressesCommandInput = UnassignPrivateIpAddressesRequest;
export declare type UnassignPrivateIpAddressesCommandOutput = __MetadataBearer;
export declare class UnassignPrivateIpAddressesCommand extends $Command<UnassignPrivateIpAddressesCommandInput, UnassignPrivateIpAddressesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: UnassignPrivateIpAddressesCommandInput;
    constructor(input: UnassignPrivateIpAddressesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UnassignPrivateIpAddressesCommandInput, UnassignPrivateIpAddressesCommandOutput>;
    private serialize;
    private deserialize;
}
