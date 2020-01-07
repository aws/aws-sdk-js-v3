import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { AttachPolicyRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AttachPolicyCommandInput = AttachPolicyRequest;
export declare type AttachPolicyCommandOutput = __MetadataBearer;
export declare class AttachPolicyCommand extends $Command<AttachPolicyCommandInput, AttachPolicyCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: AttachPolicyCommandInput;
    constructor(input: AttachPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AttachPolicyCommandInput, AttachPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
