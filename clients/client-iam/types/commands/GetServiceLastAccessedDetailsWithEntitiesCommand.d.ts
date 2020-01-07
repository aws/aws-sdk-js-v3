import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetServiceLastAccessedDetailsWithEntitiesRequest, GetServiceLastAccessedDetailsWithEntitiesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetServiceLastAccessedDetailsWithEntitiesCommandInput = GetServiceLastAccessedDetailsWithEntitiesRequest;
export declare type GetServiceLastAccessedDetailsWithEntitiesCommandOutput = GetServiceLastAccessedDetailsWithEntitiesResponse & __MetadataBearer;
export declare class GetServiceLastAccessedDetailsWithEntitiesCommand extends $Command<GetServiceLastAccessedDetailsWithEntitiesCommandInput, GetServiceLastAccessedDetailsWithEntitiesCommandOutput, IAMClientResolvedConfig> {
    readonly input: GetServiceLastAccessedDetailsWithEntitiesCommandInput;
    constructor(input: GetServiceLastAccessedDetailsWithEntitiesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetServiceLastAccessedDetailsWithEntitiesCommandInput, GetServiceLastAccessedDetailsWithEntitiesCommandOutput>;
    private serialize;
    private deserialize;
}
