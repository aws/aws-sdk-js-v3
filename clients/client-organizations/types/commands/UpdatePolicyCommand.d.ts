import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { UpdatePolicyRequest, UpdatePolicyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdatePolicyCommandInput = UpdatePolicyRequest;
export declare type UpdatePolicyCommandOutput = UpdatePolicyResponse & __MetadataBearer;
export declare class UpdatePolicyCommand extends $Command<UpdatePolicyCommandInput, UpdatePolicyCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: UpdatePolicyCommandInput;
    constructor(input: UpdatePolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdatePolicyCommandInput, UpdatePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
