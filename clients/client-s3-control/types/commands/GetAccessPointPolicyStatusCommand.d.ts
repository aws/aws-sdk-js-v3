import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { GetAccessPointPolicyStatusRequest, GetAccessPointPolicyStatusResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetAccessPointPolicyStatusCommandInput = GetAccessPointPolicyStatusRequest;
export declare type GetAccessPointPolicyStatusCommandOutput = GetAccessPointPolicyStatusResult & __MetadataBearer;
export declare class GetAccessPointPolicyStatusCommand extends $Command<GetAccessPointPolicyStatusCommandInput, GetAccessPointPolicyStatusCommandOutput, S3ControlClientResolvedConfig> {
    readonly input: GetAccessPointPolicyStatusCommandInput;
    constructor(input: GetAccessPointPolicyStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: S3ControlClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAccessPointPolicyStatusCommandInput, GetAccessPointPolicyStatusCommandOutput>;
    private serialize;
    private deserialize;
}
