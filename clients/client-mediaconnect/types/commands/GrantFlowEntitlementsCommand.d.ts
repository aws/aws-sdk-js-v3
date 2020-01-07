import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { GrantFlowEntitlementsRequest, GrantFlowEntitlementsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GrantFlowEntitlementsCommandInput = GrantFlowEntitlementsRequest;
export declare type GrantFlowEntitlementsCommandOutput = GrantFlowEntitlementsResponse & __MetadataBearer;
export declare class GrantFlowEntitlementsCommand extends $Command<GrantFlowEntitlementsCommandInput, GrantFlowEntitlementsCommandOutput, MediaConnectClientResolvedConfig> {
    readonly input: GrantFlowEntitlementsCommandInput;
    constructor(input: GrantFlowEntitlementsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GrantFlowEntitlementsCommandInput, GrantFlowEntitlementsCommandOutput>;
    private serialize;
    private deserialize;
}
