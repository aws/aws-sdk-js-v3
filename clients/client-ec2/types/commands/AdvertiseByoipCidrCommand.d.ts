import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AdvertiseByoipCidrRequest, AdvertiseByoipCidrResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AdvertiseByoipCidrCommandInput = AdvertiseByoipCidrRequest;
export declare type AdvertiseByoipCidrCommandOutput = AdvertiseByoipCidrResult & __MetadataBearer;
export declare class AdvertiseByoipCidrCommand extends $Command<AdvertiseByoipCidrCommandInput, AdvertiseByoipCidrCommandOutput, EC2ClientResolvedConfig> {
    readonly input: AdvertiseByoipCidrCommandInput;
    constructor(input: AdvertiseByoipCidrCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdvertiseByoipCidrCommandInput, AdvertiseByoipCidrCommandOutput>;
    private serialize;
    private deserialize;
}
