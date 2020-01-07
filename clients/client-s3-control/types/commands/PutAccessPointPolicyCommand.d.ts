import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { PutAccessPointPolicyRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutAccessPointPolicyCommandInput = PutAccessPointPolicyRequest;
export declare type PutAccessPointPolicyCommandOutput = __MetadataBearer;
export declare class PutAccessPointPolicyCommand extends $Command<PutAccessPointPolicyCommandInput, PutAccessPointPolicyCommandOutput, S3ControlClientResolvedConfig> {
    readonly input: PutAccessPointPolicyCommandInput;
    constructor(input: PutAccessPointPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ControlClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutAccessPointPolicyCommandInput, PutAccessPointPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
