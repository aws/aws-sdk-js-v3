import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ResetDeploymentsRequest, ResetDeploymentsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ResetDeploymentsCommandInput = ResetDeploymentsRequest;
export declare type ResetDeploymentsCommandOutput = ResetDeploymentsResponse & __MetadataBearer;
export declare class ResetDeploymentsCommand extends $Command<ResetDeploymentsCommandInput, ResetDeploymentsCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: ResetDeploymentsCommandInput;
    constructor(input: ResetDeploymentsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResetDeploymentsCommandInput, ResetDeploymentsCommandOutput>;
    private serialize;
    private deserialize;
}
