import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { UnassignIpv6AddressesRequest, UnassignIpv6AddressesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UnassignIpv6AddressesCommandInput = UnassignIpv6AddressesRequest;
export declare type UnassignIpv6AddressesCommandOutput = UnassignIpv6AddressesResult & __MetadataBearer;
export declare class UnassignIpv6AddressesCommand extends $Command<UnassignIpv6AddressesCommandInput, UnassignIpv6AddressesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: UnassignIpv6AddressesCommandInput;
    constructor(input: UnassignIpv6AddressesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UnassignIpv6AddressesCommandInput, UnassignIpv6AddressesCommandOutput>;
    private serialize;
    private deserialize;
}
