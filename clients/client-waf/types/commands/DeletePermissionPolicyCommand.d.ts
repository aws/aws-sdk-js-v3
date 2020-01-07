import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";
import { DeletePermissionPolicyRequest, DeletePermissionPolicyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeletePermissionPolicyCommandInput = DeletePermissionPolicyRequest;
export declare type DeletePermissionPolicyCommandOutput = DeletePermissionPolicyResponse & __MetadataBearer;
export declare class DeletePermissionPolicyCommand extends $Command<DeletePermissionPolicyCommandInput, DeletePermissionPolicyCommandOutput, WAFClientResolvedConfig> {
    readonly input: DeletePermissionPolicyCommandInput;
    constructor(input: DeletePermissionPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePermissionPolicyCommandInput, DeletePermissionPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
