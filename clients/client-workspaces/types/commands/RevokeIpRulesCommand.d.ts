import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { RevokeIpRulesRequest, RevokeIpRulesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RevokeIpRulesCommandInput = RevokeIpRulesRequest;
export declare type RevokeIpRulesCommandOutput = RevokeIpRulesResult & __MetadataBearer;
export declare class RevokeIpRulesCommand extends $Command<RevokeIpRulesCommandInput, RevokeIpRulesCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: RevokeIpRulesCommandInput;
    constructor(input: RevokeIpRulesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RevokeIpRulesCommandInput, RevokeIpRulesCommandOutput>;
    private serialize;
    private deserialize;
}
