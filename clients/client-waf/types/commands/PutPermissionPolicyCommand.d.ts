import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";
import { PutPermissionPolicyRequest, PutPermissionPolicyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutPermissionPolicyCommandInput = PutPermissionPolicyRequest;
export declare type PutPermissionPolicyCommandOutput = PutPermissionPolicyResponse & __MetadataBearer;
export declare class PutPermissionPolicyCommand extends $Command<PutPermissionPolicyCommandInput, PutPermissionPolicyCommandOutput, WAFClientResolvedConfig> {
    readonly input: PutPermissionPolicyCommandInput;
    constructor(input: PutPermissionPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutPermissionPolicyCommandInput, PutPermissionPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
