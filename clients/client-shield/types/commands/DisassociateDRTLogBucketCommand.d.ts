import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";
import { DisassociateDRTLogBucketRequest, DisassociateDRTLogBucketResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisassociateDRTLogBucketCommandInput = DisassociateDRTLogBucketRequest;
export declare type DisassociateDRTLogBucketCommandOutput = DisassociateDRTLogBucketResponse & __MetadataBearer;
export declare class DisassociateDRTLogBucketCommand extends $Command<DisassociateDRTLogBucketCommandInput, DisassociateDRTLogBucketCommandOutput, ShieldClientResolvedConfig> {
    readonly input: DisassociateDRTLogBucketCommandInput;
    constructor(input: DisassociateDRTLogBucketCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ShieldClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateDRTLogBucketCommandInput, DisassociateDRTLogBucketCommandOutput>;
    private serialize;
    private deserialize;
}
