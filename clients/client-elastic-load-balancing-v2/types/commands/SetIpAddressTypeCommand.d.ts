import { ElasticLoadBalancingv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingv2Client";
import { SetIpAddressTypeInput, SetIpAddressTypeOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SetIpAddressTypeCommandInput = SetIpAddressTypeInput;
export declare type SetIpAddressTypeCommandOutput = SetIpAddressTypeOutput & __MetadataBearer;
export declare class SetIpAddressTypeCommand extends $Command<SetIpAddressTypeCommandInput, SetIpAddressTypeCommandOutput, ElasticLoadBalancingv2ClientResolvedConfig> {
    readonly input: SetIpAddressTypeCommandInput;
    constructor(input: SetIpAddressTypeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetIpAddressTypeCommandInput, SetIpAddressTypeCommandOutput>;
    private serialize;
    private deserialize;
}
