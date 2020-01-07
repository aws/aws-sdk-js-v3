import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { PutPolicyRequest, PutPolicyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutPolicyCommandInput = PutPolicyRequest;
export declare type PutPolicyCommandOutput = PutPolicyResponse & __MetadataBearer;
export declare class PutPolicyCommand extends $Command<PutPolicyCommandInput, PutPolicyCommandOutput, FMSClientResolvedConfig> {
    readonly input: PutPolicyCommandInput;
    constructor(input: PutPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutPolicyCommandInput, PutPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
