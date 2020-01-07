import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { DetachPolicyRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DetachPolicyCommandInput = DetachPolicyRequest;
export declare type DetachPolicyCommandOutput = __MetadataBearer;
export declare class DetachPolicyCommand extends $Command<DetachPolicyCommandInput, DetachPolicyCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: DetachPolicyCommandInput;
    constructor(input: DetachPolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetachPolicyCommandInput, DetachPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
