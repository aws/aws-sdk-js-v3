import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";
import { AssociateDRTLogBucketRequest, AssociateDRTLogBucketResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateDRTLogBucketCommandInput = AssociateDRTLogBucketRequest;
export declare type AssociateDRTLogBucketCommandOutput = AssociateDRTLogBucketResponse & __MetadataBearer;
export declare class AssociateDRTLogBucketCommand extends $Command<AssociateDRTLogBucketCommandInput, AssociateDRTLogBucketCommandOutput, ShieldClientResolvedConfig> {
    readonly input: AssociateDRTLogBucketCommandInput;
    constructor(input: AssociateDRTLogBucketCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ShieldClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateDRTLogBucketCommandInput, AssociateDRTLogBucketCommandOutput>;
    private serialize;
    private deserialize;
}
