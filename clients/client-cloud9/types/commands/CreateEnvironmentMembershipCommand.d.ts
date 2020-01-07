import { Cloud9ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Cloud9Client";
import { CreateEnvironmentMembershipRequest, CreateEnvironmentMembershipResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateEnvironmentMembershipCommandInput = CreateEnvironmentMembershipRequest;
export declare type CreateEnvironmentMembershipCommandOutput = CreateEnvironmentMembershipResult & __MetadataBearer;
export declare class CreateEnvironmentMembershipCommand extends $Command<CreateEnvironmentMembershipCommandInput, CreateEnvironmentMembershipCommandOutput, Cloud9ClientResolvedConfig> {
    readonly input: CreateEnvironmentMembershipCommandInput;
    constructor(input: CreateEnvironmentMembershipCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Cloud9ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateEnvironmentMembershipCommandInput, CreateEnvironmentMembershipCommandOutput>;
    private serialize;
    private deserialize;
}
