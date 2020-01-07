import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";
import { DescribeDRTAccessRequest, DescribeDRTAccessResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDRTAccessCommandInput = DescribeDRTAccessRequest;
export declare type DescribeDRTAccessCommandOutput = DescribeDRTAccessResponse & __MetadataBearer;
export declare class DescribeDRTAccessCommand extends $Command<DescribeDRTAccessCommandInput, DescribeDRTAccessCommandOutput, ShieldClientResolvedConfig> {
    readonly input: DescribeDRTAccessCommandInput;
    constructor(input: DescribeDRTAccessCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ShieldClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDRTAccessCommandInput, DescribeDRTAccessCommandOutput>;
    private serialize;
    private deserialize;
}
