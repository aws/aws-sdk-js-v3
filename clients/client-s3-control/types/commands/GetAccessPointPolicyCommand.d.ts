import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { GetAccessPointPolicyRequest, GetAccessPointPolicyResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetAccessPointPolicyCommandInput = GetAccessPointPolicyRequest;
export declare type GetAccessPointPolicyCommandOutput = GetAccessPointPolicyResult & __MetadataBearer;
export declare class GetAccessPointPolicyCommand extends $Command<GetAccessPointPolicyCommandInput, GetAccessPointPolicyCommandOutput, S3ControlClientResolvedConfig> {
    readonly input: GetAccessPointPolicyCommandInput;
    constructor(input: GetAccessPointPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ControlClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAccessPointPolicyCommandInput, GetAccessPointPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
