import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";
import { TestIdentityProviderRequest, TestIdentityProviderResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type TestIdentityProviderCommandInput = TestIdentityProviderRequest;
export declare type TestIdentityProviderCommandOutput = TestIdentityProviderResponse & __MetadataBearer;
export declare class TestIdentityProviderCommand extends $Command<TestIdentityProviderCommandInput, TestIdentityProviderCommandOutput, TransferClientResolvedConfig> {
    readonly input: TestIdentityProviderCommandInput;
    constructor(input: TestIdentityProviderCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TransferClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TestIdentityProviderCommandInput, TestIdentityProviderCommandOutput>;
    private serialize;
    private deserialize;
}
