import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { JoinDomainInput, JoinDomainOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type JoinDomainCommandInput = JoinDomainInput;
export declare type JoinDomainCommandOutput = JoinDomainOutput & __MetadataBearer;
export declare class JoinDomainCommand extends $Command<JoinDomainCommandInput, JoinDomainCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: JoinDomainCommandInput;
    constructor(input: JoinDomainCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<JoinDomainCommandInput, JoinDomainCommandOutput>;
    private serialize;
    private deserialize;
}
