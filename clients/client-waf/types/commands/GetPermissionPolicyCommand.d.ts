import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";
import { GetPermissionPolicyRequest, GetPermissionPolicyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetPermissionPolicyCommandInput = GetPermissionPolicyRequest;
export declare type GetPermissionPolicyCommandOutput = GetPermissionPolicyResponse & __MetadataBearer;
export declare class GetPermissionPolicyCommand extends $Command<GetPermissionPolicyCommandInput, GetPermissionPolicyCommandOutput, WAFClientResolvedConfig> {
    readonly input: GetPermissionPolicyCommandInput;
    constructor(input: GetPermissionPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPermissionPolicyCommandInput, GetPermissionPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
